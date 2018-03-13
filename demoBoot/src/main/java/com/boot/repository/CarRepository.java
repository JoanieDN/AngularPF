package com.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.model.Car;

public interface CarRepository extends JpaRepository <Car, Long>  {

	//métodos
	
	// guardar-modificar
	@SuppressWarnings("unchecked")
	Car save(Car car);
	
	
}
