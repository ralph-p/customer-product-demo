import { CustomerDTO } from "../DTO/customer";

export const customerListFetcher = (args: string) => fetch(args).then(res => res.json() as unknown as CustomerDTO[])

export const customerDetailsFetcher = (args: string) => fetch(args).then(res => res.json() as unknown as CustomerDTO)
