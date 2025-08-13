#!/usr/bin/env python3
"""
This module provides a helper function for pagination.
It calculates the start and end indexes for retrieving a 
specific page of results from a dataset.
"""

from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
Calculate the start and end index for a given page and page size.

Args:
    page(int): the page number (1-indexed, must be >= 1)
    page_size (int): number of items per page (must be > 0)
    
Returns:
    Tuple[int, int]: A tuple containig (start_index end_index)
    """

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
