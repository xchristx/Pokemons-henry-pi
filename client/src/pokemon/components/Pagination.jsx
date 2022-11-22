
import './styles/Pagination.scss'


export const Pagination = ({ currentPage, setCurrentPage, totalPokemons }) => {
	const totalPages = Math.ceil(totalPokemons / 12);

	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<div className='container-pagination'>
			<ul className="pagination">
				<li onClick={() => setCurrentPage(currentPage - 1)}
					className={`li-${(currentPage ===1)?'disabled':''}`}
				>
						&laquo;
				</li>

				{pages.map((page) => (
					<li
						key={page}
						onClick={() => setCurrentPage(page)}
						className= {`li-${(currentPage===page)?'active':''}`}
					>
						{page}
					</li>
				))}

				<li onClick={() => setCurrentPage(currentPage + 1)}
					className={`li-${(currentPage === totalPages)?'disabled':''}`}
				>
						&raquo;
				</li>
			</ul>
		</div>
	);
};