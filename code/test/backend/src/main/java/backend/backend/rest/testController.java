package backend.backend.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import backend.backend.rest.chartResponse;


@RestController
public class testController {
    @GetMapping("/data")
    public String getNextTraining() {
        //Hier muss noch ne Datenbankoperation rein
        chartResponse
        return "Hello, World!";
        
    }
    
}
