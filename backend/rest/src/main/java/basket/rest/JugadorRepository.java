package basket.rest;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface JugadorRepository extends CrudRepository<Jugador, Long> {

	@Query(value = "SELECT * FROM jugador WHERE nombre = ?1", nativeQuery = true)
	Jugador findBynombreJugador(String nombre);
	
	@Query(value = "SELECT * FROM jugador WHERE equipo = ?1", nativeQuery = true)
	List<Jugador> findByEquipo(String nombreEquipo);

	@Query(value = "SELECT * FROM jugador WHERE temporada = ?1", nativeQuery = true)
	List<Jugador> findByTemporada(String temporada);
}