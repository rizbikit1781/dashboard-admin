import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header titel="FAQ" subtitle="Frequently Asked Question Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    TITIE 1
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dicta laboriosam mollitia similique porro itaque eligendi aliquam quasi hic debitis officiis sit ratione accusamus id obcaecati ullam, explicabo sapiente? Qui.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    TITIE 2
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laboriosam hic officiis sequi, maxime facere delectus ab ratione unde est excepturi sapiente magnam qui voluptate nobis laborum quo facilis ipsa?
=                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    TITIE 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id, consequatur ut inventore hic nam adipisci et repellendus iusto? Consectetur suscipit earum ea nisi vitae harum tempore quasi expedita ipsum?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    TITIE 4
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat maiores illum non aliquid voluptas, ea mollitia iure rerum repudiandae placeat illo! Neque, recusandae saepe minima numquam mollitia repellat doloribus omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    TITIE 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, unde maxime blanditiis distinctio dolorum eius corrupti dolorem a laborum laboriosam assumenda et voluptatem molestias quia tenetur aliquam totam perferendis. Numquam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    TITIE 6
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, unde maxime blanditiis distinctio dolorum eius corrupti dolorem a laborum laboriosam assumenda et voluptatem molestias quia tenetur aliquam totam perferendis. Numquam.
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
}


export default FAQ;