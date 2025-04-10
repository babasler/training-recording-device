package backend.backend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class chartService {

    @Autowired
    private chartRepositpry chartRepositpry;

    // Methode zum Erstellen eines Benutzers
    public chartResponse createChart(String header, String description) {
        chartResponse chart = new chartResponse(header, description);
        return chartRepositpry.save(chart);
    }
}
