package com.boot.services;

import java.util.List;

import com.boot.model.Car;

public interface CarService {

	Car save(Car car);

	List<Car> findAll();

	/*
	 * 
	 * 
	 * */
	void deleteUser(Long id);

	
	
}
