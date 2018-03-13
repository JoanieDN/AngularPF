package com.boot.services.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.*;

import com.boot.services.CarService;
import com.boot.model.Car;
import com.boot.repository.*;
@Service
@Transactional
public class CarServiceImpl implements CarService{

	 private final CarRepository  carRepository;
	
	 public CarServiceImpl(CarRepository  carRepository) {
	        this.carRepository = carRepository;
	    }

	@Override
	public Car save(Car car) {
		
		return this.carRepository.save(car);
	}

	@Override
	public List<Car> findAll() {
		
		return this.carRepository.findAll();
	}

	@Override
	public void deleteUser(Long id) {
		this.carRepository.delete(id);
		
	}
	 
}
