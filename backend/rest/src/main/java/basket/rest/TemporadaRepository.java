package basket.rest;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface TemporadaRepository  extends CrudRepository<Temporada, Long>{

	@Query(value = "SELECT * FROM seasons WHERE seasons.temporada = ?1", nativeQuery = true)
	Temporada findByTemporada(String temporada);

	@Query(value = "SELECT * FROM seasons", nativeQuery = true)
	List<Temporada> showTemporadas();
}
