import { Button } from "@mui/material";
import Link from "next/link";

import styles from './menu.module.css';

export const Logo = () => (
    <Link href='#' color="inherit" className={styles.logo}>
        <Button color="inherit">ANB</Button>
    </Link>
)