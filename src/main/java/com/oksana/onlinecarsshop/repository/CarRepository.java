package com.oksana.onlinecarsshop.repository;

import com.oksana.onlinecarsshop.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Long > {
}
