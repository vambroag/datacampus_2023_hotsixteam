package com.Datacampus.Team5.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "answer")

public class ResponseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nickname;

    @Column
    private int gender;

    @Column
    private int age;

    @Column
    private int birthday;

    @Column
    private int pheight;

    @Column
    private int pweight;

    @Column
    private int q_sit;

    @Column
    private int q_exercise;

    @Column
    private int q_drink;

    @Column
    private int q_breakfast;

    @Column
    private int q_lunch;

    @Column
    private int q_dinner;

    @Column
    private int q_smoke;

    @Column
    private int q_alcohol;

    @Column
    private int q_alcohol_time;

    @Column
    private int q_alcohol_quant;

    @Column
    private int q_tired;

    @Column
    private int q_sleep;

    @Column
    private int q_stress;

    @Column
    private int q_depress;

    @Column
    private int q_healthy;

    @Column
    private int q_cancer;

    @Column
    private int q_state;

    @Column
    private int q_disease_none;

    @Column
    private int q_disease_hypertension;

    @Column
    private int q_disease_diabetes;

    @Column
    private int q_disease_hyperlipidemia;

    @Column
    private int q_disease_thyroid;

    @Column
    private int q_disease_anemia;

    @Column
    private int q_disease_cancer;

    @Column
    private int q_medicine;

    @Column
    private int qf_pregnant;

    @Column
    private int qf_feeding;

    @Column
    private int qf_menopause;

    @Column
    private int qf_birthphill;

    @Column
    private int result;

    @Column
    private int yes_or_no;

}
