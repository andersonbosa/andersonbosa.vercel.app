import { format, parseISO } from "date-fns"

export const formatedDate = (date: string) => {
    return format(parseISO(date), 'dd/MM/yyyy')
}