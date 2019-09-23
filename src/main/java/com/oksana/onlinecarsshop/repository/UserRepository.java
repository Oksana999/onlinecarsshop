package com.oksana.onlinecarsshop.repository;

import com.oksana.onlinecarsshop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
