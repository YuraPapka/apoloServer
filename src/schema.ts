import {gql} from 'apollo-server';

const typeDefs = gql`
    type Query {
        customers: [Customers]!,
        categories: [Categories]!,
        products: [Products]!,
        commands: [Commands]!,
        invoices: [Invoices]!,
        reviews: [Reviews]!,
    }

    scalar Date
    
    type Customers {
        id: ID!
        first_name: String
        last_name: String
        email: String
        address: String
        zipcode: String
        city: String
        avatar: String
        
            birthday: Date
            first_seen: Date
            last_seen: Date
        has_ordered: Boolean
            latest_purchase: Date
        has_newsletter: Boolean
        #    groups: array
        nb_commands: Int
        total_spent: Int
    }

    type Categories {
        id: ID!
        name: String
    }

    type Products {
        id: ID!
        category_id: Int
        reference: String
        width: Float
        height: Float
        price: Float
        thumbnail: String
        image: String
        description: String
        stock: Int
    }

    type Commands {
        id: ID!
        reference: String
            date: Date
        customer_id: Int
        basket: [BasketProduct]!
        total_ex_taxes: Float
        delivery_fees: Float
        tax_rate: Float
        taxes: Float
        total: Float
        status: CommandsStatus!
        returned: Boolean
    }

    type BasketProduct {
        product_id: Int!
        quantity: Int!
    }

    enum CommandsStatus {
        ordered
        delivered
        canceled
    }

    type Invoices {
        id: ID!
            date: Date
        command_id: Int
        customer_id: Int
        total_ex_taxes: Float
        delivery_fees: Float
        tax_rate: Float
        taxes: Float
        total: Float
    }

    type Reviews {
        id: ID!
            date: Date
        status: ReviewsStatus!
        command_id: Int
        product_id: Int
        customer_id: Int
        rating: Int
        comment: String
    }

    enum ReviewsStatus {
        pending
        accepted
        rejected
    }
`;

export default typeDefs;
