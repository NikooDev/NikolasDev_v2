import React, { useCallback, useEffect, useState } from 'react'
import { Facebook, Github, Linkedin } from '@Component/icons/social'
import Container from '@Layout/container'
import Title from '@Layout/container/title'
import useAnchors from '@Hook/useAnchors'
import useResponsive from '@Hook/useResponsive'

const About = () => {
	const [experience, setExperience] = useState<number>(1)
	const [projects, setProjects] = useState<number>(1)
	const [currentDev, setCurrentDev] = useState<number>(0)
	const [aboutReady, setAboutReady] = useState<boolean>(false)

	const { handleAnchor } = useAnchors()
	const { Sm } = useResponsive()

	const handleExperience = useCallback(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 700 && window.scrollY < 1600) setAboutReady(true)
			else setAboutReady(false)
		})
	}, [])

	useEffect(() => handleExperience(), [handleExperience])

	useEffect(() => {
		if (aboutReady || Sm) {
			if (experience < 15) setTimeout(() => setExperience(experience + 1), 200)
			if (projects < 6) setTimeout(() => setProjects(projects + 1), 400)
			if (currentDev < 1) setTimeout(() => setCurrentDev(currentDev + 1), 700)
		} else {
			setProjects(1)
			setExperience(1)
			setCurrentDev(0)
		}
	}, [aboutReady, experience, projects, currentDev, Sm])

	return (
		<section className="relative mt-32 pt-14" id="about">
			<Container>
				<Title>QUI SUIS-JE ?</Title>
				<div className="absolute left-0 mt-20 w-full min-h-[25rem] bg-gradient-to-tr from-[#6a98ef] to-[#4961db] shadow-lg -z-10 -skew-y-3 inset"/>
				<div className="flex flex-col md:flex-row mt-14">
					<div className="flex items-center flex-col">
						<img src="/static/avatar.svg" className="flex rounded-3xl bg-[#f8f8f8] dark:bg-[#0f1113] border-white max-w-fit" height={350} width={350} alt="avatar"/>
						<div className="flex justify-center mt-5">
							<a href="https://github.com/NikooDev" target="_blank" className="mr-5 text-white hover:text-[#383838] transition-colors duration-200" aria-label="Github">
								<Github />
							</a>
							<a href="https://www.facebook.com/nikoola44/" target="_blank" className="mr-5 text-white hover:text-[#383838] transition-colors duration-200" aria-label="Facebook">
								<Facebook />
							</a>
							<a href="https://www.linkedin.com/in/nicolas-tual-677092161/" aria-label="Linkedin" className="text-white hover:text-[#383838] transition-colors duration-200" target="_blank">
								<Linkedin />
							</a>
						</div>
					</div>
					<div className="mt-10 mb-5 px-3 md:p-12 text-white text-base font-quicksand">
						<p className="mb-3 pl-5 md:pl-0 relative about-p">Je m'appelle <strong>Nicolas Tual</strong>, je suis actuellement ??tudiant en Bachelor Concepteur D??veloppeur d'Application (BAC +3) chez MyDigitalSchool.</p>
						<p className="mb-3 pl-5 md:pl-0 relative about-p">Mon int??r??t et ma passion pour les technologies du web ont commenc?? en 2005.
							<br />Durant ces ann??es j'ai su me former et d??velopper des comp??tences en devenant autodidacte.</p>
						<p className="mb-3 pl-5 md:pl-0 relative about-p">L'obtention de mon BAC professionnel Syst??me Num??rique en 2020 a ??t?? un tremplin pour pouvoir acc??der ?? des formations sup??rieures diplomantes.</p>
						<p className="mt-12 py-2 text-center md:text-left">Vous souhaitez en savoir plus ?<br/>N'h??sitez pas ?? <a href="/" onClick={(event) => handleAnchor(event)} data-anchor="contact" className="inline-flex ml-1.5 text-white hover:underline underline-offset-4 font-semibold">ME CONTACTER</a></p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-around relative p-3 md:-mt-9">
					<div className="bg-white dark:bg-[#212529] w-full md:w-11/12 py-3 mb-3 px-5 md:py-8 mr-5 shadow-lg rounded-2xl md:rounded-b-2xl">
						<p className="flex items-center justify-center text-lg font-semibold font-quicksand whitespace-nowrap md:flex-col md:whitespace-normal">
							<span className="text-3xl mr-3 md:text-4xl md:mb-3">+ { experience }</span>
							ann??es d'autoformation
						</p>
					</div>
					<div className="bg-white dark:bg-[#212529] w-full md:w-11/12 py-3 mb-3 px-5 md:py-8 mr-5 shadow-lg rounded-2xl md:rounded-b-2xl">
						<p className="flex items-center justify-center text-lg font-semibold font-quicksand whitespace-nowrap md:flex-col md:whitespace-normal">
							<span className="text-3xl mr-3 md:text-4xl md:mb-3">{ projects }</span>
							projets web termin??s
						</p>
					</div>
					<div className="bg-white dark:bg-[#212529] w-full md:w-11/12 py-3 mb-3 px-5 md:py-8 shadow-lg rounded-2xl md:rounded-b-2xl">
						<p className="flex items-center justify-center text-lg font-semibold font-quicksand whitespace-nowrap md:flex-col md:whitespace-normal">
							<span className="text-3xl mr-3 md:text-4xl md:mb-3">{ currentDev }</span>
							projet{ currentDev > 1 ? 's' : '' } en d??veloppement
						</p>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default About