#!/usr/bin/env python3
"""
Module that defines an asynchronous generator.
The generator yields 10 random floats between 0 and 10,
with a 1-second pause between each yield.
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields 10 random numbers between 0 and 10.
    Waits 1 second between each yield.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
