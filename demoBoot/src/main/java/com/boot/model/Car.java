package com.boot.model;

import javax.persistence.*;

@Entity
@Table(name= "autos")
@Access(AccessType.FIELD)
public class Car extends BaseEntity {

	private static final long serialVersionUID = -8763366139523624589L;


	@Column(name="modelo", nullable=false)
	private String modelo;
    
	@Column(name="marca", nullable=false)
    private String marca;
    
	@Column(name="anio", nullable=false)
    private Long anio;
    
	@Column(name="color", nullable=false)
    private String color;

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Long getAnio() {
        return anio;
    }

    public void setAño(Long anio) {
        this.anio = anio;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    
	
	
}
