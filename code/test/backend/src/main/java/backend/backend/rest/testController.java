package backend.backend.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class testController {
    @GetMapping("/data/nexTraining")
    public chartResponse getNextTraining() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Nächstes Training", "Ganzkörpertraining");  
    }

    @GetMapping("/data/lastTraining")
    public chartResponse getLastTraining() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Letztes Training", "Ganzkörpertraining");
    }

    @GetMapping("/data/trainingDuration")
    public chartResponse getTrainingDuration() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Trainingsdauer", "7 Tage: Xh Xmin");
    }
    
    @GetMapping("/data/pulse")
    public chartResponse getPulse() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Puls", "X bpm");
    }
    @GetMapping("/data/weight")
    public chartResponse getWeight() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Gewicht", "X kg");
    }
}
