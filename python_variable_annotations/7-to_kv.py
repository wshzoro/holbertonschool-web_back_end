#!/usr/bin/env python3
"""Modules that define function the return a tuple of
a string and a square of a number.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return the sum of as a float.
    """
    return sum(k, float(v ** 2))
