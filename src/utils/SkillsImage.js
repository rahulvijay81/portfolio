import html from "../Assets/svg/skills/html.svg";
import photoshop from "../Assets/svg/skills/photoshop.svg";
import docker from "../Assets/svg/skills/docker.svg";
import adobeXd from "../Assets/svg/skills/adobe-xd.svg";
import afterEffects from "../Assets/svg/skills/after-effects.svg";
import css from "../Assets/svg/skills/css.svg";
import angular from "../Assets/svg/skills/angular.svg";
import javascript from "../Assets/svg/skills/javascript.svg";
import nextJS from "../Assets/svg/skills/nextJS.svg";
import nuxtJS from "../Assets/svg/skills/nuxtJS.svg";
import react from "../Assets/svg/skills/react.svg";
import svelte from "../Assets/svg/skills/svelte.svg";
import typescript from "../Assets/svg/skills/typescript.svg";
import vue from "../Assets/svg/skills/vue.svg";
import bootstrap from "../Assets/svg/skills/bootstrap.svg";
import bulma from "../Assets/svg/skills/bulma.svg";
import capacitorjs from "../Assets/svg/skills/capacitorjs.svg";
import coffeescript from "../Assets/svg/skills/coffeescript.svg";
import memsql from "../Assets/svg/skills/memsql.svg";
import mongoDB from "../Assets/svg/skills/mongoDB.svg";
import mysql from "../Assets/svg/skills/mysql.svg";
import postgresql from "../Assets/svg/skills/postgresql.svg";
import tailwind from "../Assets/svg/skills/tailwind.svg";
import vitejs from "../Assets/svg/skills/vitejs.svg";
import vuetifyjs from "../Assets/svg/skills/vuetifyjs.svg";
import c from "../Assets/svg/skills/c.svg";
import cplusplus from "../Assets/svg/skills/cplusplus.svg";
import csharp from "../Assets/svg/skills/csharp.svg";
import dart from "../Assets/svg/skills/dart.svg";
import go from "../Assets/svg/skills/go.svg";
import java from "../Assets/svg/skills/java.svg";
import julia from "../Assets/svg/skills/julia.svg";
import kotlin from "../Assets/svg/skills/kotlin.svg";
import matlab from "../Assets/svg/skills/matlab.svg";
import php from "../Assets/svg/skills/php.svg";
import python from "../Assets/svg/skills/python.svg";
import ruby from "../Assets/svg/skills/ruby.svg";
import swift from "../Assets/svg/skills/swift.svg";
import adobeaudition from "../Assets/svg/skills/adobeaudition.svg";
import aws from "../Assets/svg/skills/aws.svg";
import deno from "../Assets/svg/skills/deno.svg";
import django from "../Assets/svg/skills/django.svg";
import firebase from "../Assets/svg/skills/firebase.svg";
import gimp from "../Assets/svg/skills/gimp.svg";
import git from "../Assets/svg/skills/git.svg";
import graphql from "../Assets/svg/skills/graphql.svg";
import lightroom from "../Assets/svg/skills/lightroom.svg";
import materialui from "../Assets/svg/skills/materialui.svg";
import nginx from "../Assets/svg/skills/nginx.svg";
import numpy from "../Assets/svg/skills/numpy.svg";
import opencv from "../Assets/svg/skills/opencv.svg";
import premierepro from "../Assets/svg/skills/premierepro.svg";
import pytorch from "../Assets/svg/skills/pytorch.svg";
import selenium from "../Assets/svg/skills/selenium.svg";
import strapi from "../Assets/svg/skills/strapi.svg";
import tensorflow from "../Assets/svg/skills/tensorflow.svg";
import webix from "../Assets/svg/skills/webix.svg";
import wordpress from "../Assets/svg/skills/wordpress.svg";

import azure from "../Assets/svg/skills/azure.svg";
import blender from "../Assets/svg/skills/blender.svg";
import fastify from "../Assets/svg/skills/fastify.svg";
import figma from "../Assets/svg/skills/figma.svg";
import flutter from "../Assets/svg/skills/flutter.svg";
import haxe from "../Assets/svg/skills/haxe.svg";
import ionic from "../Assets/svg/skills/ionic.svg";
import markdown from "../Assets/svg/skills/markdown.svg";
import microsoftoffice from "../Assets/svg/skills/microsoftoffice.svg";
import picsart from "../Assets/svg/skills/picsart.svg";
import sketch from "../Assets/svg/skills/sketch.svg";
import unity from "../Assets/svg/skills/unity.svg";
import wolframalpha from "../Assets/svg/skills/wolframalpha.svg";

import canva from "../Assets/svg/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
