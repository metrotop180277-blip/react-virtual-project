import React from "react";
import {createBrowserRouter} from 'react-router'
import Layout from "../Layout/Layout";
import HomePage from "../../Pages/HomePage/HomePage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import DetailBlogPage from "../../Pages/DetailBlogPage/DetailBlogPage";
import DetailServicePage from "../../Pages/DetailServicePage/DetailServicePage";
import FaqPage from "../../Pages/FaqPage/FaqPage";
import OurTeamPage from "../../Pages/OurTeamPage/OurTeamPage";
import PolicyPage from "../../Pages/PolicyPage/PolicyPage";
import PricingPage from "../../Pages/PricingPage/PricingPage";
import ServicePage from "../../Pages/ServicePage/ServicePage";
import TeamsPage from "../../Pages/TeamsPage/TeamsPage";
import Page from "../../Pages/404Page/404Page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/home',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/blog',
                element: <BlogPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
            {
                path: '/detailblog',
                element: <DetailBlogPage />,
            },
            {
                path: '/detailservice',
                element: <DetailServicePage />,
            },
            {
                path: '/faqpage',
                element: <FaqPage />,
            },
            {
                path: '/ourteam',
                element: <OurTeamPage />,
            },
            {
                path: '/policy',
                element: <PolicyPage />,
            },
            {
                path: '/pricing',
                element: <PricingPage />,
            },
            {
                path: '/service',
                element: <ServicePage />,
            },
            {
                path: '/teams',
                element: <TeamsPage />,
            },
            {
                path: '/error',
                element: <Page />,
            },
        ]
    }
])

export default router