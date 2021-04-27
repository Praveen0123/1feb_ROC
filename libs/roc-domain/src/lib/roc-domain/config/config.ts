export const CONFIG =
{
  USER_PROFILE:
  {
    MINIMUM_AGE: 13,
    MAXIMUM_AGE: 70,
    DEFAULT_AGE: 18,
    RADIUS_IN_MILES: 25,
  },
  CAREER_GOAL:
  {
    DEFAULT_RETIREMENT_AGE: 65,
    RETIREMENT_AGE_MINIMUM: 40,
    RETIREMENT_AGE_MAXIMUM: 80,
  },
  EDUCATION_COST:
  {
    YEARS_TO_COMPLETE_MINIMUM: 1,
    YEARS_TO_COMPLETE_DEFAULT: 4,
    YEARS_TO_COMPLETE_MAXIMUM: 8,
    YEARS_OF_COLLEGE_HIGH_SCHOOL: 0,
    YEARS_OF_COLLEGE_ASSOCIATES_DEGREE: 2,
    YEARS_OF_COLLEGE_BACHELORS_DEGREE: 4,
    YEARS_OF_COLLEGE_MASTERS_DEGREE: 6,
    YEARS_OF_COLLEGE_DOCTORATE_DEGREE: 8,
    DEFAULT_COST_OF_LIVING_ADJUSTMENT: 0.03,
  },
  EDUCATION_FINANCING:
  {
    MAXIMUM_FEDERAL_LOAN_AMOUNT: 31000,
    PAY_OFF_LOAN_MINIMUM_IN_YEARS: 0,
    PAY_OFF_LOAN_MAXIMUM_IN_YEARS: 30,
    DEFAULT_PAY_OFF_FEDERAL_LOAN_IN_YEARS: 10,
    DEFAULT_PAY_OFF_PRIVATE_LOAN_IN_YEARS: 8,
    DEFAULT_FEDERAL_LOAN_INTEREST_RATE: 0.0275,
    DEFAULT_PRIVATE_LOAN_INTEREST_RATE: 0.07
  },
  LOAN_CONSTANTS:
  {
    DEPENDENT:
    {
      FEDERAL_SUBSIDIZED:
      {
        YEAR_1: 3500,
        YEAR_2: 4500,
        YEAR_3_PLUS: 5500,
        TOTAL: 23000,
      },
      FEDERAL_UNSUBSIDIZED:
      {
        YEAR_1: 2000,
        YEAR_2: 2000,
        YEAR_3_PLUS: 2000,
        TOTAL: 8000,
      },
    },
    INDEPENDENT:
    {
      FEDERAL_SUBSIDIZED:
      {
        YEAR_1: 3500,
        YEAR_2: 4500,
        YEAR_3_PLUS: 7500,
        TOTAL: 23000,
      },
      FEDERAL_UNSUBSIDIZED:
      {
        YEAR_1: 6000,
        YEAR_2: 6000,
        YEAR_3_PLUS: 7000,
        TOTAL: 34500,
      },
    }
  }
};
