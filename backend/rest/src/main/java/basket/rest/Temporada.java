 package basket.rest;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "seasons")
public class Temporada implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "idtemporada")
	private Long idtemporada;

	@NotNull
	@Column(name = "temporada")
	private String temporada;

	@OneToMany	(fetch = FetchType.LAZY,
    cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "temporada", name = "temporada")
	private Set<Jugador> jugadores;
	
	public Temporada() {
		
	}
	
	public Temporada(String nombre_temporada, Long id) {
		super();
		this.temporada = nombre_temporada;
		this.idtemporada = id;
	}

	public Long getIdtemporada() {
		return idtemporada;
	}

	public String getTemporada() {
		return temporada;
	}

	public void setTemporada(String temporada) {
		this.temporada = temporada;
	}

	public void setIdtemporada(Long idtemporada) {
		this.idtemporada = idtemporada;
	}


	public Set<Jugador> getJugadores() {
		return jugadores;
	}

	public void setJugadores(Set<Jugador> jugadores) {
		this.jugadores = jugadores;
	}
	
}
