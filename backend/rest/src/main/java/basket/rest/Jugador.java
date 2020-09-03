package basket.rest;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "players")
public class Jugador implements Serializable {
    
	private final static long serialVersionUID = -4618197748572561495L;
	
	// @Column(name = "assets")
	@ElementCollection(targetClass = Asset.class)
	private List<Asset> assets = null;

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name = "id")
	private Long idjugador;
	
	@NotNull
	@Column(name = "imagenjugador")
	private String imagenjugador;
	
	@NotNull()
	@Column(name = "temporada")
	private String temporada;
	
	@NotNull
    @Size(max = 40)
    @Column(name = "nombre")
    private String nombreJugador;

    @Size(max = 20)
    @Column(name = "equipo")
    private String equipo; 
	
    @Column(name = "true_shooting_p")
    private Double true_shooting_p;
	
    @Column(name = "effective_fg_p")
    private Double effective_fg_p;
	
	@Column(name = "total_shooting_p")
    private Double total_shooting_p;
	
    @Column(name = "orb_p")
    private Double orb_p;
    
    @Column(name = "drb_p")
    private Double drb_p;
    
    @Column(name = "trb_p")
    private Double trb_p;
    
    @Column(name = "ast_p")
    private Double ast_p;
    
    @Column(name = "tov_p")
    private Double tov_p;
    
    @Column(name = "stl_p")
    private Double stl_p;
    
	@Column(name = "blk_p")
    private Double blk_p;
    
    @Column(name = "usg_p")
    private Double usg_p;
    
    @Column(name = "ppr")
    private Double ppr;
    
    @Column(name = "pps")
    private Double pps;
    
    @Column(name = "ortg")
    private Double ortg;
    
    @Column(name = "drtg")
    private Double drtg;
    
    @Column(name = "ediff")
    private Double ediff; 
    
    @Column(name = "fic")
    private Double fic;

   
 // Hibernate requires a no-arg constructor
    public Jugador() {

    }
    
    public Jugador(Long idjugador, String temporada, Double rank, String imagenJug, String nombre, String equipo, Double true_shooting_p,   Double effective_fg_p, Double total_shooting_p, Double orb_p, Double drb_p, Double trb_p,
    		Double ast_p,  Double tov_p, Double stl_p, Double blk_p, Double usg_p, Double ppr, Double pps, Double ortg, Double drtg, Double ediff, Double fic) {
		super();
		this.idjugador = idjugador;
		this.nombreJugador = nombre;
		this.imagenjugador = imagenJug;
		this.temporada = temporada;
		this.equipo = equipo;
		this.true_shooting_p = true_shooting_p;
		this.effective_fg_p = effective_fg_p;
		this.total_shooting_p = total_shooting_p;
		this.orb_p = orb_p;
		this.drb_p = drb_p;
		this.trb_p = trb_p;
		this.ast_p = ast_p;
		this.tov_p = tov_p;
		this.stl_p = stl_p;
		this.blk_p = blk_p;
		this.usg_p = usg_p;
		this.ppr = ppr;
		this.pps = pps;
		this.ortg = ortg;
		this.drtg = drtg;
		this.ediff = ediff;
		this.fic = fic;
	}
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
  	@JoinColumn(name = "temporada", nullable = false)
   
    public Long getIdjugador() {
		return idjugador;
	}

	public void setIdjugador(Long idjugador) {
		this.idjugador = idjugador;
	}

	public String getTemporada() {
		return temporada;
	}

	public void setTemporada(String temporada) {
		this.temporada = temporada;
	}

	public  String getNombreJugador() {
		return nombreJugador;
	}

	public void setNombreJugador(String nombreJugador) {
		this.nombreJugador = nombreJugador;
	}

	public String getEquipo() {
		return equipo;
	}

	public void setEquipo(String equipo) {
		this.equipo = equipo;
	}

	public Double getTrue_shooting_p() {
		return true_shooting_p;
	}

	public void setTrue_shooting_p(Double true_shooting_p) {
		this.true_shooting_p = true_shooting_p;
	}

	public Double getEffective_fg_p() {
		return effective_fg_p;
	}

	public void setEffective_fg_p(Double effective_fg_p) {
		this.effective_fg_p = effective_fg_p;
	}

	public Double getTotal_shooting_p() {
		return total_shooting_p;
	}

	public void setTotal_shooting_p(Double total_shooting_p) {
		this.total_shooting_p = total_shooting_p;
	}

	public Double getOrb_p() {
		return orb_p;
	}

	public void setOrb_p(Double orb_p) {
		this.orb_p = orb_p;
	}

	public Double getDrb_p() {
		return drb_p;
	}

	public void setDrb_p(Double drb_p) {
		this.drb_p = drb_p;
	}

	public Double getTrb_p() {
		return trb_p;
	}

	public void setTrb_p(Double trb_p) {
		this.trb_p = trb_p;
	}

	public Double getAst_p() {
		return ast_p;
	}

	public void setAst_p(Double ast_p) {
		this.ast_p = ast_p;
	}

	public Double getTov_p() {
		return tov_p;
	}

	public void setTov_p(Double tov_p) {
		this.tov_p = tov_p;
	}

	public Double getStl_p() {
		return stl_p;
	}

	public void setStl_p(Double stl_p) {
		this.stl_p = stl_p;
	}

	public Double getBlk_p() {
		return blk_p;
	}

	public void setBlk_p(Double blk_p) {
		this.blk_p = blk_p;
	}

	public Double getUsg_p() {
		return usg_p;
	}

	public void setUsg_p(Double usg_p) {
		this.usg_p = usg_p;
	}

	public Double getPpr() {
		return ppr;
	}

	public void setPpr(Double ppr) {
		this.ppr = ppr;
	}

	public Double getPps() {
		return pps;
	}

	public void setPps(Double pps) {
		this.pps = pps;
	}

	public Double getOrtg() {
		return ortg;
	}

	public void setOrtg(Double ortg) {
		this.ortg = ortg;
	}

	public Double getDrtg() {
		return drtg;
	}

	public void setDrtg(Double drtg) {
		this.drtg = drtg;
	}

	public Double getEdiff() {
		return ediff;
	}

	public void setEdiff(Double ediff) {
		this.ediff = ediff;
	}

	public Double getFic() {
		return fic;
	}

	public void setFic(Double fic) {
		this.fic = fic;
	}

	public void setImagenjugador(String imagenjugador) {
		this.imagenjugador = imagenjugador;
	}

	
	public String getImagenjugador() {
		return imagenjugador;
	}

	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public List<Asset> getAssets() {
		return assets;
	}

	public void setAssets(List<Asset> assets) {
		this.assets = assets;
	}

}