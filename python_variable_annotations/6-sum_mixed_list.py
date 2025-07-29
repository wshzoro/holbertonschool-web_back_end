#!/usr/bin/env python3
"""Modules that define function which takes a list of floats and ints.
"""
from typing import List, Union


def sum_mixed_list(mxd_list: List[int, float]) -> float:
    """Return the sum of as a float.
    """
    return sum(mxd_list)
