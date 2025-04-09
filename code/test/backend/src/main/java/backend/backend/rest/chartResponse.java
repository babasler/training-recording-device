package backend.backend.rest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class chartResponse {
    private String header;
    private String description;

    public chartResponse(String header,String description) {
        this.header = header;
        this.description = description;
    }
    
}
