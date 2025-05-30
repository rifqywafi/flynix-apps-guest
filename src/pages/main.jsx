import { createRoot } from "react-dom/client";
import {ContainerCol} from "../components/Container";
import Header from "../../layouts/Header";
import ContactForm from "./ContactForm";
// import "../assets/style.css" 

createRoot(document.getElementById("root"))
    .render(
        <div>
            <ContainerCol>
                <Header title="Contact Us" />
                <ContactForm />
            </ContainerCol>
        </div>
)