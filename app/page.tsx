"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Settings,
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Factory,
  Cpu,
  Power,
  BriefcaseBusiness
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { recentProjects } from "@/components/util/recentProjects";
import { trustedCompanies } from "@/components/util/trustedCompanies";
import Loading from "./loading";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const heroSectionRef = useRef(null);

  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-black/50 bg-black backdrop-blur-md sticky top-0 z-50 shadow-sm"
        >
          <div className="container mx-auto px-6 py-5 flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-accent/20">
                <Image
                  src="/taqnioon-logo.png"
                  alt="TAQNIYOON Logo"
                  width={100}
                  height={100}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl font-[family-name:var(--font-space-grotesk)] text-white">
                  TAQNIYOON
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wide">
                  Technical Services Co. LLC
                </p>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-accent transition-all duration-300 relative group"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block"
              >
                <a href="#contact">
                  <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-border/50 shadow-lg z-40"
            >
              <div className="container mx-auto px-6 py-6">
                <nav className="flex flex-col space-y-4">
                  {[
                    { href: "#services", label: "Services" },
                    { href: "#about", label: "About" },
                    { href: "#projects", label: "Projects" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-white hover:text-accent transition-colors py-2 border-b border-border/20 last:border-b-0"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.div className="pt-4">
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold">
                        Get a Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </motion.header>

        {/* Hero Section */}
        <section
          ref={heroSectionRef}
          className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center"
        >
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 z-10"
            style={{ y: heroParallaxY }}
          >
            <img
              src="/images/hero-industrial-dark-pro.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover scale-110"
            />
          </motion.div>

          {/* Enhanced Overlay Gradients */}
          <div className="absolute inset-0 z-20 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

          {/* Geometric Accent Elements */}
          <div className="absolute top-20 right-20 z-25 w-32 h-32 border border-accent/30 rotate-45 hidden lg:block"></div>
          <div className="absolute bottom-32 left-20 z-25 w-24 h-24 bg-accent/10 rotate-12 hidden lg:block"></div>

          <div className="container mx-auto px-6 relative z-30 w-full">
            <motion.div
              ref={heroRef}
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="max-w-6xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              {/* Professional Badge */}
              <motion.div variants={fadeInUp} className="mb-8">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium"
                >
                  ⚡ Trusted by Leading Industries Across the Middle East
                </Badge>
                
              </motion.div>

              {/* Enhanced Typography Hierarchy */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)] text-white leading-tight"
              >
                Empowering Industries with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
                  Innovative Electrical Solutions
                </span>
              </motion.h1>

              {/* Enhanced Description */}
              <motion.p
                variants={fadeInUp}
                className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto lg:mx-0 text-white/90 leading-relaxed font-light"
              >
                Expertise in automation, power systems, and industrial panels.
                Serving oil & gas, construction, and manufacturing sectors
                across the UAE and Middle East with cutting-edge solutions.
              </motion.p>

              {/* Enhanced Call-to-Action Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#services">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                    >
                      Discover Our Services
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#projects">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                    >
                      View Projects
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
              </motion.div>

              {/* Key Statistics */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0"
              >
                {[
                  { number: "6000A", label: "Max Panel Capacity" },
                  { number: "32+", label: "Generators Controlled" },
                  { number: "200+", label: "Projects Completed" },
                  { number: "30+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-sm text-white/80 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.a
            href="#services"
            aria-label="Scroll to services"
            className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm mb-2 font-medium">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.a>
        </section>

        <section
          id="trusted"
          // className="py-24 bg-gradient-to-br from-[#F8FAFF] to-[#F0F6FF] relative overflow-hidden"
          className="relative overflow-hidden bg-[#0C0C0C] pt-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-center text-lg lg:text-xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white"
          >
            Trusted By
          </motion.h2>

          <div className="flex justify-center w-full">
            <div className="flex w-10/12 flex-wrap justify-around gap-4">
              {trustedCompanies.map((item) => {
                return (
                  <motion.div
                    variants={scaleIn}
                    className="w-24 h-24 rounded-2xl flex items-center justify-center"
                    key={item.alt}
                    title={item.alt}
                  >
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-contain"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          // className="py-24 bg-gradient-to-br from-[#F8FAFF] to-[#F0F6FF] relative overflow-hidden"
          className="py-24 relative overflow-hidden bg-[#0C0C0C]"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-accent rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/30 rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              ref={servicesRef}
              initial="initial"
              animate={servicesInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent border border-accent/20 px-4 py-2 text-sm font-medium"
                >
                  ⚡ Professional Services
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white"
              >
                Our Core Services
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Comprehensive electrical solutions designed for industrial
                excellence, delivering cutting-edge technology and unmatched
                reliability
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={servicesInView ? "animate" : "initial"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={scaleIn}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:shadow-2xl transition-all duration-500 h-full  hover:-translate-y-2 relative overflow-hidden hover:shadow-accent/10">
                  {/* Gradient Border Effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl mb-3 group-hover:text-accent transition-colors duration-300 text-white">
                      Industrial Panels
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      LV panels up to 6000A, MCCs with VFDs, soft starters, and
                      conventional starters for industrial projects
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src="/industrial-electrical-control-panel-with-switches-.png"
                        alt="Industrial control panel"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <ul className="space-y-3 text-sm">
                      {[
                        "Switchgear panels up to 6000A",
                        "Motor Control Centers (MCCs)",
                        "VFDs and soft starters",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-accent" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:shadow-2xl transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden hover:shadow-accent/10">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl mb-3 group-hover:text-accent transition-colors duration-300 text-white">
                      Automation & Control
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      PLC-based automation panels and control systems for
                      complex industrial applications
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src="/plc-automation-control-system-with-hmi-display-and.png"
                        alt="PLC automation system"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <ul className="space-y-3 text-sm">
                      {[
                        "PLC-based automation",
                        "Control and automation panels",
                        "Custom control schemes",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-accent" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl mb-3 group-hover:text-accent transition-colors duration-300 text-white">
                      Power Systems
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Generator synchronization, ATS panels, and power
                      management solutions up to 3200A
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src="/industrial-generator-synchronization-panel-with-po.png"
                        alt="Power management system"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <ul className="space-y-3 text-sm">
                      {[
                        "Generator synchronization",
                        "ATS panels up to 3200A",
                        "Capacitor banks",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-accent" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl mb-3 group-hover:text-accent transition-colors duration-300 text-white">
                      Electrical Retrofitting
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Modernize existing electrical systems for improved
                      efficiency and compatibility
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src="/electrical-retrofitting-upgrade-of-industrial-faci.png"
                        alt="Electrical retrofitting"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <ul className="space-y-3 text-sm">
                      {[
                        "System modernization",
                        "Energy efficiency upgrades",
                        "Safety compliance",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-accent" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl mb-3 group-hover:text-accent transition-colors duration-300 text-white">
                      Special Purpose Panels
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Custom-designed panels for unique industrial applications
                      and specific requirements
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src="/custom-special-purpose-electrical-control-panel-wi.png"
                        alt="Special purpose panel"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <ul className="space-y-3 text-sm">
                      {[
                        "Custom design solutions",
                        "Specialized applications",
                        "Unique requirements",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-accent" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Power className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl mb-3 group-hover:text-accent transition-colors duration-300 text-white">
                      Capacitor Banks
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Reactive power compensation systems for improved energy
                      efficiency and cost reduction
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src="/industrial-capacitor-bank-for-power-factor-correct.png"
                        alt="Capacitor bank system"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <ul className="space-y-3 text-sm">
                      {[
                        "Power factor correction",
                        "Energy cost reduction",
                        "System efficiency",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-accent" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 bg-[#000000] relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 right-32 w-40 h-40 border border-accent rotate-45"></div>
            <div className="absolute bottom-32 left-32 w-32 h-32 bg-accent/20 rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              ref={aboutRef}
              initial="initial"
              animate={aboutInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <motion.div variants={fadeInUp} className="mb-6">
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border border-accent/20 px-4 py-2 text-sm font-medium mb-6"
                    >
                      🏆 Industry Leadership
                    </Badge>
                  </motion.div>

                  <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)] text-white leading-tight">
                    Leading Technical Excellence
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    TAQNIYOON Technical Services Co. LLC has established itself
                    as a premier provider of electrical solutions in the UAE and
                    Middle East region. We specialize in manufacturing and
                    supplying high-quality electrical panels and automation
                    systems.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our expertise spans across oil & gas, construction, and
                    industrial sectors, delivering reliable solutions that meet
                    international standards and regulations. From generator
                    synchronization to complex automation systems, we provide
                    comprehensive electrical services.
                  </p>
                </div>

                {/* Enhanced Statistics */}
                <div className="grid grid-cols-2 gap-8 pt-8">
                  {[
                    {
                      number: "6000A",
                      label: "Maximum panel capacity",
                      icon: "⚡",
                    },
                    {
                      number: "32+",
                      label: "Generators controlled",
                      icon: "🔧",
                    },
                    { number: "200+", label: "Projects completed", icon: "🏗️" },
                    { number: "30+", label: "Years of experience", icon: "📅" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl  hover:border-accent/20 transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <h3 className="font-bold text-3xl text-accent mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.number}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                {/* Main Image with Enhanced Styling */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src="/industrial-electrical-panel-control-room-with-mode.png"
                    alt="Industrial electrical control room"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Secondary Images Grid */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="/industrial-electrical-technician-working-on-contro.png"
                      alt="Technician working"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="/modern-industrial-facility-with-electrical-infrast.png"
                      alt="Industrial facility"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-accent text-white px-6 py-3 rounded-2xl shadow-lg font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  ISO Certified
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
                  
        <section
          id="projects"
          className="py-24 bg-[#0C0C0C] relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 right-32 w-40 h-40 border border-accent rotate-45"></div>
            <div className="absolute bottom-32 left-32 w-32 h-32 bg-accent/20 rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              ref={projectsRef}
              initial="initial"
              animate={projectsInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent border border-accent/20 px-4 py-2 text-sm font-medium"
                >
                  🚀 Success Stories
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white"
              >
                Recent Projects
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Trusted by leading companies across various industries,
                delivering excellence in every project we undertake
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={projectsInView ? "animate" : "initial"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {recentProjects.map((item) => {
                return (
                  <motion.div variants={scaleIn} key={item.id + item.title}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={item.picture}
                          alt="Marine VFD installation"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* <div className="absolute top-6 left-6">
                          <span className="bg-gradient-to-r from-accent to-accent/80 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                            {item.usage}
                          </span>
                        </div> */}

                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white font-bold text-xl mb-2 font-[family-name:var(--font-space-grotesk)]">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-sm font-medium">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="text-center p-3 bg-accent/5 rounded-xl">
                              <div className="font-bold text-accent text-lg">
                                {item.detail1}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {item.detail2}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>


        {/* Industries Section */}
        <section className="py-24 bg-[#000000] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-accent rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rotate-12"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-accent/30 rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent border border-accent/20 px-4 py-2 text-sm font-medium"
                >
                  🏭 Industry Expertise
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white"
              >
                Industries We Serve
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Delivering specialized electrical solutions across diverse
                industrial sectors with unmatched expertise and reliability
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: "/oil-and-gas-industry-icon.png",
                  title: "Oil & Gas",
                  description: "Offshore and onshore electrical solutions",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: "/construction-industry-icon.png",
                  title: "Construction",
                  description: "Temporary and permanent power solutions",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  icon: "/manufacturing-industry-icon.png",
                  title: "Manufacturing",
                  description: "Industrial automation and control systems",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: "/marine-industry-icon.png",
                  title: "Marine",
                  description: "Provide Yacht and marine electrical systems",
                  color: "from-cyan-500 to-cyan-600",
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group text-center"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10  rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <img
                          src={industry.icon}
                          alt={industry.title}
                          className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <h3 className="font-bold text-xl mb-4 font-[family-name:var(--font-space-grotesk)] text-white group-hover:text-accent transition-colors duration-300">
                        {industry.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div> */}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-[#0C0C0C] relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-accent rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/30 rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center mb-20"
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent border border-accent/20 px-4 py-2 text-sm font-medium"
                  >
                    📞 Let's Connect
                  </Badge>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white"
                >
                  Get in Touch
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                >
                  Ready to discuss your electrical project requirements? Let's
                  build something extraordinary together
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto"
              >
                <div className="grid lg:grid-cols-4 gap-4 mb-16">
                  {/* Phone Contact */}
                  <motion.div variants={fadeInUp}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10  p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-white">
                        Call Us
                      </h3>
                      <div className="space-y-1 flex-grow">
                        <a
                          href="tel:+971588446578"
                          className="block text-base font-semibold text-accent hover:text-accent/80 transition-colors duration-300"
                        >
                          +971 588446578
                        </a>
                        <a
                          href="tel:+971521083644"
                          className="block text-base font-semibold text-accent hover:text-accent/80 transition-colors duration-300"
                        >
                          +971 521083644
                        </a>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">
                        Available 24/7 for emergency support
                      </p>
                    </div>
                  </motion.div>

                  {/* Email Contact */}
                  <motion.div variants={fadeInUp}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10  p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-white">
                        Email Us
                      </h3>
                      <div className="flex-grow">
                        <a
                          href="mailto:info@taqniyoon.com?subject=Project Inquiry&body=Hello TAQNIYOON Team,%0D%0A%0D%0AI am interested in your electrical services and would like to discuss my project requirements.%0D%0A%0D%0AProject Details:%0D%0A- Industry: %0D%0A- Service Required: %0D%0A- Timeline: %0D%0A- Location: %0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you."
                          className="text-base font-semibold text-accent hover:text-accent/80 transition-colors duration-300 block"
                        >
                          info@taqniyoon.com
                        </a>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">
                        Our experts will respond within 24 hours
                      </p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div variants={fadeInUp}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10  p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col">
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-white">
                        Visit Us
                      </h3>
                      <div className="flex-grow">
                        <p className="text-accent hover:text-accent/80 font-semibold mb-2">
                          UAE - Middle East Region
                        </p>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">
                        Serving across the Middle East region
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10  p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col">
                      <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <BriefcaseBusiness className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-white">
                        Join Us
                      </h3>
                      <div className="flex-grow">
                        <p className="text-accent hover:text-accent/80 font-semibold mb-2">
                         info@taqniyoon.com
                        </p>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">
                        Ready to join us? Email your resume to our team
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Company Image */}
                <motion.div
                  variants={fadeInUp}
                  className="relative overflow-hidden rounded-3xl shadow-2xl group"
                >
                  <img
                    src="/industrial-electrical-panel-control-room-with-mode.png"
                    alt="TAQNIYOON Technical Services - Professional electrical solutions"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-center">
                    <h4 className="text-white font-bold text-2xl mb-2 font-[family-name:var(--font-space-grotesk)]">
                      TAQNIYOON Technical Services
                    </h4>
                    <p className="text-white/90 text-lg">
                      Your trusted partner for industrial electrical solutions
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#000000] to-[#0d0d0d] text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-accent rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/30 rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Image
                      src="/taqnioon-logo.png"
                      alt="TAQNIYOON Logo"
                      width={100}
                      height={100}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl font-[family-name:var(--font-space-grotesk)]">
                      TAQNIYOON
                    </h3>
                    <p className="text-sm text-white/70">
                      Technical Services Co. LLC
                    </p>
                  </div>
                </motion.div>

                <p className="text-white/80 leading-relaxed mb-6">
                  Leading provider of industrial electrical solutions in the UAE
                  and Middle East, delivering excellence since 2024.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-white/80">+971 588446578</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-white/80">info@taqniyoon.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-white/80">UAE - Middle East</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-lg mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {[
                    "Industrial Panels",
                    "Automation Systems",
                    "Power Management",
                    "Electrical Retrofitting",
                    "Special Purpose Panels",
                    "Capacitor Banks",
                  ].map((service, index) => (
                    <li key={index}>
                      <a
                        href="#services"
                        className="text-white/70 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4 className="font-bold text-lg mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Industries
                </h4>
                <ul className="space-y-3">
                  {[
                    "Oil & Gas",
                    "Construction",
                    "Manufacturing",
                    "Marine",
                    "Infrastructure",
                    "Hospitality",
                  ].map((industry, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {industry}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Certifications */}
              <div>
                <h4 className="font-bold text-lg mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Company
                </h4>
                <ul className="space-y-3 mb-8">
                  {[
                    { label: "About Us", href: "#about" },
                    { label: "Projects", href: "#projects" },
                    { label: "Contact", href: "#contact" },
                    { label: "Careers", href: "#contact" },
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Certifications */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <h5 className="font-semibold text-sm mb-3 text-accent">
                    Certifications
                  </h5>
                  <div className="space-y-2 text-xs text-white/70">
                    <p>✓ ISO 9001:2015 Certified</p>
                    <p>✓ UAE Trade License</p>
                    <p>✓ Industry Compliance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-white/60">
                  © 2025 TAQNIYOON Technical Services Co. LLC. All rights
                  reserved.
                </p>

                <div className="flex items-center gap-6 text-sm text-white/60">
                  <a
                    href="#"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                  {/* <a href="#" className="hover:text-accent transition-colors duration-300">Sitemap</a> */}
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
