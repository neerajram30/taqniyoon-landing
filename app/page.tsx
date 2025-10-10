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
  ChevronDown,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

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
          className="border-b bg-white backdrop-blur-sm sticky top-0 z-50"
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/taqnioon-logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-8 h-8 text-primary-foreground"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg font-[family-name:var(--font-space-grotesk)]">
                  TAQNIYOON
                </h1>
                <p className="text-xs text-muted-foreground">
                  Technical Services
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#services"
                className="text-sm hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button className="bg-accent hover:bg-accent/90">
              Get a Quote
            </Button>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section
          ref={heroSectionRef}
          className="relative py-20 lg:py-32 overflow-hidden h-screen"
        >
          <motion.img
            src="/images/hero-industrial-dark-pro.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-10 h-full w-full object-cover"
            style={{ y: heroParallaxY }}
          />
          {/* Strengthen dark overlay gradient for better contrast */}
          <div className="absolute inset-0 z-20 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-30">
            {/* Add glass panel behind hero copy and ensure high-contrast text */}
            <motion.div
              ref={heroRef}
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="max-w-5xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="inline-block px-6 py-6 md:px-8 md:py-8 text-primary-foreground">
                <motion.div variants={fadeInUp}>
                  {/* Ensure badge readable on dark bg */}
                  {/* <Badge
                    variant="secondary"
                    className="mb-6 bg-background/30 text-primary-foreground border border-border/30"
                  >
                    Trusted by Leading Industries
                  </Badge> */}
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-primary-foreground"
                >
                  Empowering Industries with{" "}
                  <span className="text-accent">
                    Innovative Electrical Solutions
                  </span>
                </motion.h1>

                {/* Use high-contrast text with slight opacity for hierarchy */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-primary-foreground opacity-90"
                >
                  Expertise in automation, power systems, and industrial panels.
                  Serving oil & gas, construction, and manufacturing sectors
                  across the UAE and Middle East.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Discover Our Services{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Ensure outline button readable on dark background */}
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                    >
                      View Projects
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue with improved contrast */}
          {/* <a
            href="#services"
            aria-label="Scroll to services"
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30"
          >
            <motion.div
              initial={{ opacity: 0.9, y: 0 }}
              animate={{ opacity: [0.8, 1, 0.8], y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-primary-foreground"
            >
              <span className="text-xs mb-1 opacity-80">Scroll</span>
              <ChevronDown className="w-5 h-5 opacity-80" />
            </motion.div>
          </a> */}
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-[#F5F9FF]">
          <div className="container mx-auto px-10">
            <motion.div
              ref={servicesRef}
              initial="initial"
              animate={servicesInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]"
              >
                Our Core Services
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Comprehensive electrical solutions designed for industrial
                excellence
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={servicesInView ? "animate" : "initial"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                      Industrial Panels
                    </CardTitle>
                    <CardDescription>
                      L V panels up to 6000A, MCCs with VFDs, soft starters, and
                      conventional starters for industrial projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/industrial-electrical-control-panel-with-switches-.png"
                        alt="Industrial control panel"
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Switchgear panels up to 6000A
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Motor Control Centers (MCCs)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        VFDs and soft starters
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Settings className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                      Automation & Control
                    </CardTitle>
                    <CardDescription>
                      PLC-based automation panels and control systems for
                      complex industrial applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/plc-automation-control-system-with-hmi-display-and.png"
                        alt="PLC automation system"
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        PLC-based automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Control and automation panels
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Custom control schemes
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                      Power Systems
                    </CardTitle>
                    <CardDescription>
                      Generator synchronization, ATS panels, and power
                      management solutions up to 3200A
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/industrial-generator-synchronization-panel-with-po.png"
                        alt="Power management system"
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Generator synchronization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        ATS panels up to 3200A
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Capacitor banks
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Factory className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                      Electrical Retrofitting
                    </CardTitle>
                    <CardDescription>
                      Modernize existing electrical systems for improved
                      efficiency and compatibility
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/electrical-retrofitting-upgrade-of-industrial-faci.png"
                        alt="Electrical retrofitting"
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        System modernization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Energy efficiency upgrades
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Safety compliance
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Cpu className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                      Special Purpose Panels
                    </CardTitle>
                    <CardDescription>
                      Custom-designed panels for unique industrial applications
                      and specific requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/custom-special-purpose-electrical-control-panel-wi.png"
                        alt="Special purpose panel"
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Custom design solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Specialized applications
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Unique requirements
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Power className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                      Capacitor Banks
                    </CardTitle>
                    <CardDescription>
                      Reactive power compensation systems for improved energy
                      efficiency and cost reduction
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/industrial-capacitor-bank-for-power-factor-correct.png"
                        alt="Capacitor bank system"
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Power factor correction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Energy cost reduction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        System efficiency
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-10">
            <motion.div
              ref={aboutRef}
              initial="initial"
              animate={aboutInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Leading Technical Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  TAQNIYOON Technical Services Co. LLC has established itself as
                  a premier provider of electrical solutions in the UAE and
                  Middle East region. We specialize in manufacturing and
                  supplying high-quality electrical panels and automation
                  systems.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our expertise spans across oil & gas, construction, and
                  industrial sectors, delivering reliable solutions that meet
                  international standards and regulations. From generator
                  synchronization to complex automation systems, we provide
                  comprehensive electrical services.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div variants={scaleIn}>
                    <h3 className="font-semibold text-2xl text-accent mb-2">
                      6000A
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Maximum panel capacity
                    </p>
                  </motion.div>
                  <motion.div variants={scaleIn}>
                    <h3 className="font-semibold text-2xl text-accent mb-2">
                      32+
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generators controlled
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <img
                  src="/industrial-electrical-panel-control-room-with-mode.png"
                  alt="Industrial electrical control room"
                  className="rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <img
                    src="/industrial-electrical-technician-working-on-contro.png"
                    alt="Technician working"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src="/modern-industrial-facility-with-electrical-infrast.png"
                    alt="Industrial facility"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-[#F5F9FF]">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]"
              >
                Industries We Serve
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Delivering specialized electrical solutions across diverse
                industrial sectors
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={scaleIn} className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/oil-and-gas-industry-icon.png"
                    alt="Oil & Gas"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Oil & Gas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Offshore and onshore electrical solutions
                </p>
              </motion.div>

              <motion.div variants={scaleIn} className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/construction-industry-icon.png"
                    alt="Construction"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Construction
                </h3>
                <p className="text-sm text-muted-foreground">
                  Temporary and permanent power solutions
                </p>
              </motion.div>

              <motion.div variants={scaleIn} className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/manufacturing-industry-icon.png"
                    alt="Manufacturing"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Manufacturing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Industrial automation and control systems
                </p>
              </motion.div>

              <motion.div variants={scaleIn} className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/marine-industry-icon.png"
                    alt="Marine"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Marine
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yacht and marine electrical systems
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-10">
            <motion.div
              ref={projectsRef}
              initial="initial"
              animate={projectsInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]"
              >
                Recent Projects
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground"
              >
                Trusted by leading companies across various industries
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={projectsInView ? "animate" : "initial"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/yacht-marine-electrical-vfd-control-panel-installa.png"
                      alt="Marine VFD installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                      SEA SAN Marine Services
                    </CardTitle>
                    <CardDescription>
                      VFD Panel for Yacht Applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Supply and programming of Schneider 7.5KW, single-phase
                      VFD for marine applications
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/hotel-automation-control-panel-for-hvac-and-water-.png"
                      alt="Hotel automation system"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                      Al Khoory Hotels
                    </CardTitle>
                    <CardDescription>Hotel Automation Systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      VFD panels for hot water systems and biology unit
                      automation panels
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Stadium power distribution"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                      Stadium Project
                    </CardTitle>
                    <CardDescription>Power Distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Supply of DB-PMAX systems for major stadium infrastructure
                      project
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#F5F9FF]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]"
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground"
                >
                  Ready to discuss your electrical project requirements?
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <span>+971 588446578, +971 521083644</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <span>info@taqniyoon.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>UAE - Middle East Region</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <img
                      src="/placeholder.svg?height=250&width=400"
                      alt="TAQNIYOON office"
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                        Request a Quote
                      </CardTitle>
                      <CardDescription>
                        Tell us about your project requirements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Name
                          </label>
                          <input className="w-full px-3 py-2 border border-input rounded-md bg-background" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Company
                          </label>
                          <input className="w-full px-3 py-2 border border-input rounded-md bg-background" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Project Details
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90">
                        Send Message
                      </Button>
                    </CardContent>
                  </Card>
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
          className="bg-[#0B192C] text-primary-foreground py-12"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    {/* <Zap className="w-5 h-5 text-accent-foreground" /> */}
                    <Image
                      src="/taqnioon-logo.png"
                      alt="logo"
                      width={100}
                      height={100}
                      className="w-8 h-8 text-primary-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold font-[family-name:var(--font-space-grotesk)]">
                      TAQNIYOON
                    </h3>
                    <p className="text-xs opacity-80">Technical Services</p>
                  </div>
                </div>
                <p className="text-sm opacity-80">
                  Leading provider of industrial electrical solutions in the UAE
                  and Middle East.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Industrial Panels</li>
                  <li>Automation Systems</li>
                  <li>Power Management</li>
                  <li>Electrical Retrofitting</li>
                  <li>Special Purpose Panels</li>
                  <li>Capacitor Banks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Industries</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Oil & Gas</li>
                  <li>Construction</li>
                  <li>Manufacturing</li>
                  <li>Marine</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>About Us</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80">
                © 2025 TAQNIYOON Technical Services Co. LLC. All rights
                reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
