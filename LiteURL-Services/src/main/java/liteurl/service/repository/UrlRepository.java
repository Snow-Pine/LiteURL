package liteurl.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import liteurl.service.entity.Url;

@Repository
public interface UrlRepository extends JpaRepository<Url, Integer>{

    @Query(value = "select inputurl from url where outputurl = ?1", nativeQuery = true)
    String findByShortUrl(String shortUrl);

}