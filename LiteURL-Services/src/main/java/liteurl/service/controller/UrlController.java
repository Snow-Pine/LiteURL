package liteurl.service.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import liteurl.service.entity.Url;
import liteurl.service.service.UrlService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UrlController {

    @Autowired
    private UrlService service;

    @GetMapping("/getAllUrl")
    public List<Url> getAllUrl(){
        return service.getAllUrl();
    }

    @PostMapping("/createUrl")
    public String createUrl(@RequestBody Map<String, String> requestBody) {
        String inUrl = requestBody.get("inUrl");
        String temp = service.filterUrl(inUrl);
        return service.createUrl(temp, inUrl);
    }

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirectToOriginalUrl(@PathVariable String shortUrl) {
        String originalUrl = service.getOriginalUrl("liteurl.com/" + shortUrl);
        if (originalUrl != null) {
            return ResponseEntity.status(302).header("Location", originalUrl).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}