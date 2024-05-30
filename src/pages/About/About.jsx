import React from "react";
import './About.css';

function About(){
    return(
        <div class="about-content">
        <div>
            <h3 class="font-extrabold text-5xl leading-5 pb-[20px] pt-4">About Us</h3>
        </div>
        <div class="bg-slate-200 box-info">
            <p class="text-left rounded-xl">
            <p class="font-normal	text-2xl">The Jahangirnagar University Computer Science and Engineering Alumni (JUCSEALUMNI) founded in 2017 by
                some graduate students of the Department Computer Science and Engineering, Jahangirnagar University.
                Some students from 1st batch to 21st batch initiated the plan to form such association aims to deliver
                most effective alumni relation for getting highly privilege in job market and higher education.</p>
                <br/>
            <p class="font-normal	text-2xl">This association has been formed to help all stay connected to this
                department and to each other, wherever one lives. This forum will help all individuals to collect any
                information he/she needs for his/her career or other issues. It will be likely a bridge among all
                undergraduate and graduate alumni students and teachers. It will also act as a provider of goodwill and
                support to this department.</p>
            </p>
        </div>
    </div>
    );
}

export default About;