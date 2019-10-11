class Skills {
    constructor () {
        const skills = [
            {
                skill: 'HTML', 
                value: 65
            }, 
            {
                skill: 'CSS', 
                value: 65
            }, 
            {
                skill: 'iOS', 
                value: 20
            }, 
            {
                skill: 'Android', 
                value: 25
            }, 
            {
                skill: 'Node', 
                value: 50
            }, 
            {
                skill: 'TypeScript', 
                value: 35
            }, 
            {
                skill: 'E-commerce', 
                value: 90
            }, 
            {
                skill: 'SEO', 
                value: 70
            }, 
            {
                skill: 'E-mail Marketing', 
                value: 60
            }, 
            {
                skill: 'React', 
                value: 1
            }, 
            {
                skill: 'Angular', 
                value: 1
            }, 
            {
                skill: 'React Native', 
                value: 0
            }
        ];
    
        this.makeSkillsBar(skills);
    }

    makeSkillsBar(skills) {
        const bars = document.querySelector('.main__skills__bars');
        
        let divs = '';

        skills.forEach(skill => {
            //divs += `<div class="main_skills_bars__bar"><div class="main_skills_bars__bar__inner" style="width:${element.value}%;">${element.skill}<span class="right"></span></div>${element.value}%</div>`;
            divs += `<div class="main_skills_bars__bar"><div class="main_skills_bars__bar__inner" style="width:${skill.value}%;">${skill.skill}<span class="right"></span></div>${skill.value}%</div>`;
        });
        bars.innerHTML = divs;
    }
}