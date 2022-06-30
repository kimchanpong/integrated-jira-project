import {Route, Routes} from "react-router-dom";
import JiraApp from "./jira/JiraApp";
import JiraNotionApp from "./jiranotion/JiraNotionApp";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<JiraApp />} />
            <Route path="jira" element={<JiraApp />} />
            <Route path="jiranotion" element={<JiraNotionApp />} />
        </Routes>
    )
}

export default AppRouter;

