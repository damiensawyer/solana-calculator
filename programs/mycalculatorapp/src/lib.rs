use anchor_lang::prelude::*;

declare_id!("G8pXBzHTQoJY7GZNgharKshiFAYdJofFprnJkUnTBa5k");


#[error_code]
pub enum ErrorCode {
    #[msg("An example error message.")]
    ExampleError,
}

#[program]
pub mod mycalculatorapp {
    use super::*;
    pub fn create(ctx: Context<Create>, init_message: String) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.greeting = init_message;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer = user, space = 264)] 
    pub calculator: Account<'info, Calculator>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Calculator {
    pub greeting: String, 
    pub result: i64,
    pub remainder: i64
}
