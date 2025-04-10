package backend.backend.rest;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface chartRepositpry extends JpaRepository<chartResponse, Long> {
    // Hier können Sie benutzerdefinierte Abfrage-Methoden hinzufügen, wenn nötig
    List<chartResponse> findByHeader(String header);
    
}
