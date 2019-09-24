import styled from 'styled-components';
import FileData from './index';

export const StyledData = styled(FileData)`
	margin: 25px;
	margin-top: 40px;
	white-space: pre;

    .content__title {
		color: rgba(0,0,0,0.7);
		font-weight: 300;
		border-top: solid 1px rgba(0,0,0,0.1);
		border-bottom: solid 1px rgba(0,0,0,0.1);
		padding: 20px 0px;
		font-size: 17px;
	}
	
	.content__body {
		font-size: 15px;
	}
	.content__subtitle {
		font-weight: 700;
	}
	.content__margin {
		margin-top: 20px;
	}
	.width_controller {
		width: 500px;
		white-space:pre-wrap;
	}
`