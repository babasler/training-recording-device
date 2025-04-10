package backend.backend.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/data")
public class testController {
    
    @Autowired
    private chartService chartService;

    @GetMapping("/nexTraining")
    public chartResponse getNextTraining() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Nächstes Training", "Ganzkörpertraining");  
    }

    @GetMapping("/lastTraining")
    public chartResponse getLastTraining() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Letztes Training", "Ganzkörpertraining");
    }

    @GetMapping("/trainingDuration")
    public chartResponse getTrainingDuration() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Trainingsdauer", "7 Tage: Xh Xmin");
    }
    
    @GetMapping("/pulse")
    public chartResponse getPulse() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Puls", "X bpm");
    }
    @GetMapping("/weight")
    public chartResponse getWeight() {
        //Hier muss noch ne Datenbankoperation rein
        return new chartResponse("Gewicht", "X kg");
    }

    @PostMapping("/pulse")
    public void progressChart(@RequestBody chartResponse chart) {
        System.out.println("Header: " + chart.getHeader());
        System.out.println("Description: " + chart.getDescription());

        chartService.createChart(chart.getHeader(), chart.getDescription());
        
       
    }
    
}
