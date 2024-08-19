import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui';

interface PaginatorProps {
  pageDto: {
    total: number;
    current: number;
  };
  handlePageChange: (targetPage: number) => void;
}

const Paginator = ({ pageDto, handlePageChange }: PaginatorProps) => {
  const { total, current } = pageDto;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={() => {
            if (current - 1 > 0) handlePageChange(current - 1);
          }}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>
        {current - 1 >= 1 && (
          <PaginationItem onClick={() => handlePageChange(current - 1)}>
            <PaginationLink href="#" className="text-sm">
              {current - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem
          onClick={() => {
            handlePageChange(current);
          }}
        >
          <PaginationLink href="#" className="text-sm" isActive>
            {current}
          </PaginationLink>
        </PaginationItem>
        {current + 1 <= total && (
          <PaginationItem onClick={() => handlePageChange(current + 1)}>
            <PaginationLink href="#" className="text-sm">
              {current + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem
          onClick={() => {
            if (current + 1 <= total) handlePageChange(current + 1);
          }}
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default Paginator;
