package backend.backend.rest;

import java.util.LinkedList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
public class testController {
    private static final Logger logger = LoggerFactory.getLogger(testController.class);

    @GetMapping("/data")
    public List<chartResponse> getChartData() {
        logger.info("GET request received for /data");
        List<chartResponse> responses = new LinkedList<>();
        responses.add(new chartResponse("Nächstes Training", "./hantel-2.png", "Ganzkörpertraining"));
        responses.add(new chartResponse("Letztes Training", "./hantel-2.png", "Ganzkörpertraining"));
        responses.add(new chartResponse("Trainingsdauer", "./repeat.png", "7 Tage: Xh Xmin"));
        responses.add(new chartResponse("Puls", "./cardiogram.png", "Durchschnitt: 120 bpm"));
        responses.add(new chartResponse("Aktuelles Gewicht", "./weight-scale.png", "X kg"));
        return responses;
    }
    
}
