import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: "Inter", sans-serif;
	}

  :root {
    --color-brand-1: #C2255C;
    --color-brand-2: #D6336C;
    --color-grey-1: #191C1F;
    --color-grey-2: #212529;
    --color-grey-3: #33363A;
    --color-grey-4: #373B3E;
    --color-grey-5: #A6A8A9;
    --color-grey-6: #D9D9D9;
    --color-grey-7: #FFFFFF;
		--shadow-1: rgba(255, 255, 255, 0.12);
		--shadow-2: rgba(255, 255, 255, 0.5);
  }

	body {
    background-color: var(--color-grey-2);
    color: var(--color-grey-7);
	}

	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;
