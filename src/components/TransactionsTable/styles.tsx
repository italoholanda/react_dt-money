import styled from "styled-components";

export const Container = styled.div`
	margin-top: 4rem;
	& table {
		width: 100%;
		border-spacing: 0 0.5rem;
	}
	& th {
		color: var(--text-body);
		font-weight: 400;
		padding: 0rem 2rem;
		line-height: 1.5rem;
		text-align: left;
	}
	& td {
		color: var(--text-body);
		padding: 1rem 2rem;
		border: 0;
		background: #fff;
		border-radius: 0.25rem;
		&:first-child {
			color: var(--text-title);
		}
	}
	& .withdraw {
		color: var(--red);
	}
	& .deposit {
		color: var(--green)
	}
`
