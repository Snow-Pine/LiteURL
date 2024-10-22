package liteurl.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity()
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Url {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String inputurl;
    private String outputurl;


    public Url(String inputurl, String outputurl) {
        super();
        this.inputurl = inputurl;
        this.outputurl = outputurl;
    }

    @Override
    public String toString() {
        return "Url [id=" + id + ", inputurl=" + inputurl + ", outputurl=" + outputurl + "]";
    }

}