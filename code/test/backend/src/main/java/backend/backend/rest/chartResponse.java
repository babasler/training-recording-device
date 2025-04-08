package backend.backend.rest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class chartResponse {
    private String header;
    private String image;
    private String description;

    public chartResponse(String header, String image, String description) {
        this.header = header;
        this.image = image;
        this.description = description;
    }
    
}
