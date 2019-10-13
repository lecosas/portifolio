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
                value: 75
            }, 
            {
                skill: 'SEO', 
                value: 65
            }, 
            {
                skill: 'E-mail Marketing', 
                value: 60
            }, 
            {
                skill: 'React', 
                value: 10
            }, 
            {
                skill: 'Angular', 
                value: 12
            }, 
            {
                skill: 'R. Native', 
                value: 14
            }, 
            {
                skill: 'SQL Server', 
                value: 55
            }, 
            {
                skill: 'Amazon AWS', 
                value: 30
            }, 
            {
                skill: 'Linux', 
                value: 25
            }, 
            {
                skill: 'VB.Net', 
                value: 65
            }
        ];
    
        this.makeSkillsBar(skills);
    }

    makeSkillsBar(skills) {
        const barsLeft = document.querySelector('.main__skills__bars.bars-left');
        const barsRight = document.querySelector('.main__skills__bars.bars-right');

        let left = true;
        let divsLeft = '';
        let divsRight = '';
        let divAux = '';

        skills.forEach(skill => {
            divAux = `<div class="main_skills_bars__bar"><div class="main_skills_bars__bar__inner" style="width:${skill.value}%;">${skill.skill}</div><p class="percentual">${skill.value}%</p></div>`;
            if (left) {
                divsLeft += divAux;
                left = false;
            } else {
                divsRight += divAux;
                left = true;
            }
        });

        barsLeft.innerHTML = divsLeft;
        barsRight.innerHTML = divsRight;
    }
}