package com.oksana.onlinecarsshop.repository;

import com.oksana.onlinecarsshop.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
