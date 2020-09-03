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

@CrossOrigin
@RestController
public class JugadorController {

	@Autowired
	private JugadorRepository up;
	
	@GetMapping(path = "/playersByTeam")
	public ResponseEntity getJugadoresByEquipo(@RequestParam(required = false) String equipo){
		
		if (equipo != null) {
			return new ResponseEntity<List<Jugador>>(up.findByEquipo(equipo), HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<Iterable<Jugador>>(up.findAll(), HttpStatus.ACCEPTED);
		}
	}

	@GetMapping(path = "/playersBySession")
	public ResponseEntity getJugadoresByTemporada(@RequestParam(required = false) String temporada){
		
		if (temporada != null) {
			return new ResponseEntity<List<Jugador>>(up.findByTemporada(temporada), HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<Iterable<Jugador>>(up.findAll(), HttpStatus.ACCEPTED);
		}
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
