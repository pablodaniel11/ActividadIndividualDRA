package basket.rest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class TemporadaController {
	
	@Autowired
	TemporadaRepository up;
	
	/**
	 * @param nombre_equipo
	 * @return ranking de un equipo
	 */
	@CrossOrigin(origins = "http://localhost:3000/")
	@GetMapping(path = "/getSeasonByNombre")
	public ResponseEntity<String> getByName(@RequestParam String nombre_equipo){
		System.out.println("dentro del metodo");
		return new ResponseEntity<String>("El ranking de " + nombre_equipo + " es: " + up.findByNombre(nombre_equipo)  ,HttpStatus.ACCEPTED);
	}	
	
	@CrossOrigin(origins = "http://localhost:3000/")
	@GetMapping(path = "/seasons")
	public ResponseEntity mostrarTemporadas(@RequestParam("nombre_temporada") String nombre_temporada, @RequestParam("url_imagen") String urlImagen){
		return new ResponseEntity<List<Temporada>>(up.showTemporadas(), HttpStatus.ACCEPTED); 
	}
	
	@Bean
	public CorsFilter corsFilter() {
	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    final CorsConfiguration config = new CorsConfiguration();
	    config.setAllowedOrigins(Collections.singletonList("http://localhost:3000")); // Provide list of origins if you want multiple origins
	    config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
	    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
	    config.setAllowCredentials(true);
	    source.registerCorsConfiguration("/**", config);
	    return new CorsFilter(source);
	}
	
}
