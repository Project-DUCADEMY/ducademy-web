import styled from 'styled-components'
const TableDivWrapper = styled.div`

`
const Table = styled.table`
	border: 1px;
`
const ProblemsTable = () => {
	return (
	<TableDivWrapper>
		<Table>
	      <thead>
	        <tr>
	          	<th>번호</th>
	          	<th>제목</th>
	          	<th>유형</th>
	          	<th>정보</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <td>john</td>
	          <td>33</td>
	        </tr>
	        <tr>
	          <td>smith</td>
	          <td>22</td>
	        </tr>
	        <tr>
	          <td>jane</td>
	          <td>24</td>
	        </tr>
	      </tbody>
	    </Table>
	</TableDivWrapper>
	)
}
export default ProblemsTable