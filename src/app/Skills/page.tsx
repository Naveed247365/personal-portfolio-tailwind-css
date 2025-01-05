'use client'

import { useEffect, useState } from 'react'

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS', level: 85 },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
      ]
    }
  ]

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-24">
      <section aria-labelledby="skills-title">
        <h1 id="skills-title" className="text-4xl font-bold text-center text-purple-600 mb-12">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-delay">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">{category.name}</h2>
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-purple-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out ${animated ? '' : 'w-0'}`} 
                      style={{ 
                        width: animated ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
