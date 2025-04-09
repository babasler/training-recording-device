package backend.backend.rest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
public class testController {
    private static final Logger logger = LoggerFactory.getLogger(testController.class);

    @GetMapping("/data")
    public String getData() {
        logger.info("GET request received for /data");
        return "Hello, World!";
        
    }
    
}
